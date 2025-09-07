"use client"

import React from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

// shadcn/ui form components
import {
    Form,
    FormControl,
    FormField,
    FormItem,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { toast } from "sonner"


// 1. Define schema
const formSchema = z.object({
    search: z.string().min(2, {
        message: "Search term must be at least 2 characters.",
    }),
})

type FormSchema = z.infer<typeof formSchema>

const SearchBox = () => {

    // 2. Hook form setup
    const form = useForm<FormSchema>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            search: "",
        },
    })

    // 3. Handle submit
    function onSubmit(values: FormSchema) {
        // pretend we call an API
        toast.success(
            `Looking up "${values.search}" 🔍`
        )
    }

    // Handle errors from validation
    function onError(errors: any) {
        if (errors.search?.message) {
            toast.error( errors.search.message)
        }
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit, onError)}
                className="flex items-center gap-2"
            >
                <Button type="submit" variant="outline" className="max-sm:hidden" >
                    <Search />
                </Button>
                <FormField
                    control={form.control}
                    name="search"
                    render={({ field }) => (
                        <FormItem className="flex-1">
                            <FormControl>
                                <Input className="max-sm:w-40 max-sm:text-xs" placeholder="Type to search..." {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    )
}

export default SearchBox
