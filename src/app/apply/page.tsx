"use client"
import { Stack, TextField, Box, Divider, Button } from '@mui/material';
import { register } from 'module';
import { useForm, SubmitHandler } from 'react-hook-form'
type FormValues = {
    loanAmount: number,
    firstName: string,
    lastName: string,
    email: string,
    socialSecurityNumber: number,
    homephone: number,
    workphone: number,
    cellphone: number,
    last4ssn: number,
    address1: string,
    address2: string,
    city: string,
    state: string
    zipcode: number
}
export default function ApplyPage() {
    const {
        register,
        handleSubmit,
        watch,
        unregister,
        formState: { errors },
    } = useForm<FormValues>();
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data);
    }
    return (
        <div>
            <Divider textAlign="center"> <h6>Apply</h6></Divider>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={{ mr: 2, p: 2, flexGrow: 1 }}>
                    <Divider textAlign="left">Patient Info</Divider>
                    <Stack direction='row' spacing={2}>
                        <TextField label="firstName"  {...register("firstName")} />
                        <TextField label="lastName"  {...register("lastName")} />
                    </Stack>
                    <Box sx={{ mr: 2, p: 2, flexGrow: 1 }}></Box>
                    <Stack direction='row' spacing={2}>
                        <TextField label="Full SSN"  {...register("socialSecurityNumber")} />
                        <Divider textAlign="center" orientation="vertical">or</Divider>
                        <TextField label="Partial SSN"  {...register("last4ssn")} />
                    </Stack>
                    <Box sx={{ mr: 2, p: 2, flexGrow: 1 }}></Box>
                    <Stack direction='row' spacing={2}>
                        <TextField label="Home Phone"  {...register("homephone")} />
                        <TextField label="Work Phone"  {...register("workphone")} />
                        <TextField label="Cell Phone"  {...register("cellphone")} />
                    </Stack>
                    <Box sx={{ mr: 2, p: 2, flexGrow: 1 }}></Box>
                    <Stack direction='row' spacing={2}>
                        <TextField label="Email"  {...register("email")} />
                    </Stack>
                    <Divider textAlign="left">Address</Divider>
                    <Stack direction='row' spacing={2}>
                        <TextField label="Address1"  {...register("address1")} />
                        <TextField label="Address2"  {...register("address2")} />
                    </Stack>
                    <Box sx={{ mr: 2, p: 2, flexGrow: 1 }}></Box>
                    <Stack direction='row' spacing={2}>
                        <TextField label="City"  {...register("city")} />
                        <TextField label="State"  {...register("state")} />
                        <TextField label="zipcode"  {...register("zipcode")} />
                    </Stack>
                    <Box sx={{ mr: 2, p: 2, flexGrow: 1 }}></Box>
                    <Divider textAlign="center">
                        <Stack direction='row' spacing={2} alignContent="center">
                            <Button className='submit-button' type="submit" variant="contained">Submit</Button>
                            <Button className='submit-button' type="reset" variant="contained">Reset</Button>
                        </Stack>
                    </Divider>
                </Box>
            </form>
        </div>
    )
}