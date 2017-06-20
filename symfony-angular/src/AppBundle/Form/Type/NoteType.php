<?php
/**
 * Created by PhpStorm.
 * User: shura
 * Date: 18.05.17
 * Time: 17:25
 */

namespace AppBundle\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class NoteType extends AbstractType
{
    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('note_title', TextType::class)
            ->add('color', TextType::class)
            ->add('type', TextType::class)
            ->add('text', TextType::class)
            ->add('date', DateType::class, [
                'format' => 'd / m / Y , h : i : s A'
            ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => 'AppBundle\Entity\Note',
        ]);
    }

    public function getName()
    {
        return 'notes';
    }
}