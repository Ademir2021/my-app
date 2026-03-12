'use client'

import { useState } from "react";
import PersonForm from "@/app/components/Person/PersonForm";
import { TPerson, TypePerson, Gender, GroupPerson } from "@/app/models/TPerson";
import { UserRole } from "@/app/models/TUser";

import { useRouter } from 'next/navigation'

export default function Person() {

    const router = useRouter()
    const [msg, setMsg] = useState('')
    const [person, setPerson] = useState<TPerson>({
        id: 0,
        typePerson: TypePerson.FISICA,
        groupPerson: GroupPerson.CLIENTE,
        branch: {
            id: 0,
            name: ''
        },
        user: {
            id: 0,
            login: '',
            password: '',
            role: UserRole.USER
        },
        name: '',
        age: 0,
        dateOfBirth: '',
        gender: Gender.MASCULINO,
        cpf: '',
        rg: '',
        email: '',
        phone: '',
        cnpj: '',
        inscricState: '',
        address: {
            id: 0,
            street: '',
            number: '',
            neighborhood: '',
            complement: '',
            zipCode: {
                id: 0,
                code: '',
            }
        }
    })


    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setPerson(values => ({ ...values, [name]: value }))
    }
    

    async function handleSubmit(e: Event) {
        e.preventDefault()
        person.groupPerson = parseInt(person.groupPerson)
         const res = await fetch('/api/person', {
            method: 'POST',
            body: JSON.stringify(person),
        })
        if (!res.ok) {
            setMsg(`Erro ao registrar Pessoa: ${JSON.stringify(res)}`)
            return
        }
        router.push('/person')
        setMsg('Pessoa registrado com sucesso')
        router.refresh()
    }

    return <>
        <pre>{JSON.stringify(person.address.zipCode?.id)}</pre>
        <PersonForm
            handleChange={handleChange}
            handleSubmit_={handleSubmit}
            msg={msg}
            setChildren={setPerson}
        >
            {person}
        </PersonForm>
    </>
}