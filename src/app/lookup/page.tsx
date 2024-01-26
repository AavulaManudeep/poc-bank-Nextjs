"use client"
import { Stack, TextField, Box, Divider, Button, Grid } from '@mui/material';
import { register } from 'module';
import { useForm, SubmitHandler } from 'react-hook-form'
type FormValues = {
    firstName: string,
    lastName: string,
    socialSecurityNumber: number,
    last4ssn: number
    accountNumber:number,
    applicationId:string
}
export default function lookupPage() {
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
            <Grid container spacing={2}>
                <Grid  xs={12} md={6} sm={12} sx={{p: 2}}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Box sx={{ mr: 2, p: 2, flexGrow: 1 }}>
                            <Divider textAlign="left">Apllication Look up</Divider>
                            <Stack direction='row' spacing={2}>
                                <TextField label="applicationId"  {...register("applicationId")}/>
                            </Stack>
                            <Box sx={{ mr: 2, p: 2, flexGrow: 1 }}></Box>
                            <Stack direction='row' spacing={2}>
                                <TextField label="Full SSN"  {...register("socialSecurityNumber")} />
                                <Divider textAlign="center" orientation="vertical">or</Divider>
                                <TextField label="Partial SSN"  {...register("last4ssn")} />
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
                </Grid>
                <Grid  xs={12} md={6} sm={12} sx={{p: 2}}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Box sx={{ mr: 2, p: 2, flexGrow: 1 }}>
                            <Divider textAlign="left">Account Look up</Divider>
                            <Stack direction='row' spacing={2}>
                                <TextField label="applicationId"  {...register("applicationId")} />
                                <TextField label="accountNumber"  {...register("accountNumber")} />
                            </Stack>
                            <Box sx={{ mr: 2, p: 2, flexGrow: 1 }}></Box>
                            <Stack direction='row' spacing={2}>
                                <TextField label="Full SSN"  {...register("socialSecurityNumber")} />
                                <Divider textAlign="center" orientation="vertical">or</Divider>
                                <TextField label="Partial SSN"  {...register("last4ssn")} />
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
                </Grid>
            </Grid>
        </div>
    )
}