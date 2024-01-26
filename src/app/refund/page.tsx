"use client"
import { Stack, TextField, Box, Divider, Button } from '@mui/material';
import { register } from 'module';
import { useForm, SubmitHandler } from 'react-hook-form'
type FormValues = {
    refundAmount: number,
    cardNumber: string,
    cvv: number,
    exp: Date,
    transactionId:string
}
export default function refundPage() {
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
            <Divider textAlign="center"> <h6>Refund</h6></Divider>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={{ mr: 2, p: 2, flexGrow: 1 }}>
                    <Stack direction='row' spacing={2}>
                        <TextField label="transaction Id"  {...register("transactionId")} />
                        <TextField label="purchase amount"  {...register("refundAmount")} />
                    </Stack>
                    <Box sx={{ mr: 2, p: 2, flexGrow: 1 }}></Box>
                    <Stack direction='row' spacing={2}>
                        <TextField label="card number" className="card-field" sx={{flexGrow:0.18}} {...register("cardNumber")} />
                    </Stack>
                    <Box sx={{ mr: 2, p: 2, flexGrow: 1 }}></Box>
                    <Stack direction='row' spacing={2}>
                        <TextField label="cvv"  {...register("cvv")} />
                        <TextField label="expiration date"  {...register("exp")} />
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