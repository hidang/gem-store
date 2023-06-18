import * as request from './axios'

export const unit = async (  )=>{
    try {
        const res = await request.get('./unit',{
            param:{
                
            }
        })
        return res.data
    } catch (error) {
        console(error)
    }
}