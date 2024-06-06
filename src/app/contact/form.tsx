'use client'
import { Box, Button, HStack, Heading, Input, Select, Stack, Text, Textarea, VStack } from "@chakra-ui/react";
import { useForm, ValidationError } from "@formspree/react";
import { useState } from 'react';

export default function ContactForm({ formkey }: { formkey: string }) {
    const [state, handleSubmit] = useForm(formkey);
    const [error, setError] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        message: '',
        inquiryType: 'general'
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const customHandleSubmit = async (e: any) => {
        e.preventDefault();
        if (formData.email === '' || formData.message === '' || formData.inquiryType === '') {
            setError(true);
            return;
        }
        await handleSubmit({
            ...formData
        });
    };

    return (
        <Box maxW={"80%"} mx={"auto"} p={4}>
            <form onSubmit={customHandleSubmit}>
                <Stack direction={"column"} spacing={2}>
                    <Text fontSize={"3xl"}>Get in touch</Text>
                    <Select
                        id="inquiryType"
                        name="inquiryType"
                        maxW={"200px"}
                        value={formData.inquiryType}
                        onChange={handleChange}
                    >
                        <option value="general">General Inquiry</option>
                        <option value="support">Recruiter</option>
                    </Select>
                    <Input
                        id="email"
                        type="email"
                        name="email"
                        maxW={"250px"}
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <Textarea
                        id="message"
                        name="message"
                        placeholder="Your message here"
                        value={formData.message}
                        onChange={handleChange}
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                    {(state.errors || error) && <Text color="red.500">There was an error submitting your message.</Text>}
                    {state.succeeded && <p>Your message has been sent. Thanks for reaching out!</p>}
                    <Button
                        mx={"auto"}
                        w="s"
                        colorScheme="codegreen.400"
                        variant={'outline'}
                        type="submit"
                        isDisabled={state.submitting || state.succeeded}
                    >
                        Submit
                    </Button>
                </Stack>
            </form>
        </Box>
    );
}