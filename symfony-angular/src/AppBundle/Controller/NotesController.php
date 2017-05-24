<?php
/**
 * Created by PhpStorm.
 * User: shura
 * Date: 18.05.17
 * Time: 9:50
 */

namespace AppBundle\Controller;


use AppBundle\Entity\Note;
use AppBundle\Form\Type\NoteType;
use FOS\RestBundle\Controller\Annotations\RouteResource;
use FOS\RestBundle\Controller\FOSRestController as FOSRestController;
use FOS\RestBundle\Routing\ClassResourceInterface;
use FOS\RestBundle\View\View;
use Nelmio\ApiDocBundle\Annotation\ApiDoc;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * Class NotesController
 * @package AppBundle\Controller
 *
 * @RouteResource("note")
 */
class NotesController extends FOSRestController implements ClassResourceInterface
{
    /**
     * Gets a single note
     *
     * @param int $id
     * @return mixed
     *
     * @ApiDoc(
     *     output="AppBundle\Entity\Note",
     *     statusCodes={
     *         200 = "Returned when successful",
     *         404 = "Return when not found"
     *     }
     *
     * )
     */
    public function getAction(int $id)
    {
        $note = $this->getDoctrine()->getRepository('AppBundle:Note')->find($id);

        if ($note === null) {
            return new View(null, Response::HTTP_NOT_FOUND);
        }

        return $note;
    }

    /**
     * Gets a collection of notes
     *
     * @return mixed
     *
     * @ApiDoc(
     *     output="AppBundle\Entity\Note",
     *     statusCodes={
     *         200 = "Returned when successful",
     *         404 = "Return when not found"
     *     }
     * )
     */
    public function cgetAction()
    {
        return $this->getDoctrine()->getRepository('AppBundle:Note')->findAll();
    }

    /**
     * @param Request $request
     * @return \FOS\RestBundle\View\View|\Symfony\Component\Form\Form
     *
     * @ApiDoc(
     *     input="AppBundle\Form\Type\NoteType",
     *     output="AppBundle\Entity\Note",
     *     statusCodes={
     *         201 = "Returned when a new note was successfully created",
     *         404 = "Return when not found"
     *     }
     * )
     */
    public function postAction(Request $request)
    {
        $form = $this->createForm(NoteType::class, null, [
            'csrf_protection' => false,
        ]);

        $form->submit($request->request->all());

        if (!$form->isValid()) {
            return $form;
        }

        /**
         * @var $note Note
         */
        $note = $form->getData();

        $em = $this->getDoctrine()->getManager();
        $em->persist($note);
        $em->flush();

        $routeOptions = [
            'id' => $note->getId(),
            '_format' => $request->get('_format'),
        ];

        return $this->routeRedirectView('get_note', $routeOptions, Response::HTTP_CREATED);
    }

    /**
     * @param Request $request
     * @return \FOS\RestBundle\View\View|\Symfony\Component\Form\Form
     *
     * @ApiDoc(
     *     input="AppBundle\Form\Type\NoteType",
     *     output="AppBundle\Entity\Note",
     *     statusCodes={
     *         204 = "Returned when a new note was successfully updated",
     *         400 = "Returned when errors",
     *         404 = "Return when not found"
     *     }
     * )
     */
    public function putAction(Request $request, int $id)
    {
        /**
         * @var $note Note
         */
        $note = $this->getDoctrine()->getRepository('AppBundle:Note')->find($id);

        if ($note === null) {
            return new View(null, Response::HTTP_NOT_FOUND);
        }

        $form = $this->createForm(NoteType::class, $note, [
            'csrf_protection' => false,
        ]);

        $form->submit($request->request->all());

        if (!$form->isValid()) {
            return $form;
        }

        $em = $this->getDoctrine()->getManager();
        $em->flush();

        $routeOptions = [
            'id' => $note->getId(),
            '_format' => $request->get('_format'),
        ];

        return $this->routeRedirectView('get_note', $routeOptions, Response::HTTP_NO_CONTENT);
    }

    /**
     * @param Request $request
     * @return \FOS\RestBundle\View\View|\Symfony\Component\Form\Form
     *
     * @ApiDoc(
     *     input="AppBundle\Form\Type\NoteType",
     *     output="AppBundle\Entity\Note",
     *     statusCodes={
     *         204 = "Returned when a new note was successfully updated",
     *         400 = "Returned when errors",
     *         404 = "Return when not found"
     *     }
     * )
     */
    public function patchAction(Request $request, int $id)
    {
        /**
         * @var $note Note
         */
        $note = $this->getDoctrine()->getRepository('AppBundle:Note')->find($id);

        $form = $this->createForm(NoteType::class, $note, [
            'csrf_protection' => false,
        ]);

        $form->submit($request->request->all(), false);

        if (!$form->isValid()) {
            return $form;
        }

        $em = $this->getDoctrine()->getManager();
        $em->flush();

        $routeOptions = [
            'id' => $note->getId(),
            '_format' => $request->get('_format'),
        ];

        return $this->routeRedirectView('get_note', $routeOptions, Response::HTTP_NO_CONTENT);
    }

    /**
     * @param int $id
     * @return View
     *
     * @ApiDoc(
     *     statusCodes={
     *         204 = "Returned when a new note was successfully deleted",
     *         404 = "Return when not found"
     *     }
     * )
     *
     */
    public function deleteAction(int $id)
    {
        /**
         * @var $note Note
         */
        $note = $this->getDoctrine()->getRepository('AppBundle:Note')->find($id);

        if ($note === null) {
            return new View(null, Response::HTTP_NOT_FOUND);
        }

        $em = $this->getDoctrine()->getManager();
        $em->remove($note);
        $em->flush();

        return new View(null, Response::HTTP_NO_CONTENT);
    }
}
