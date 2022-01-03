import './watch.scss'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

export default function Watch() {
    return (
        <div className='watch'>
            <div className="back">
                <ArrowBackOutlinedIcon />
                Home
            </div>
            <video src="https://player.vimeo.com/external/559560668.sd.mp4?s=d1ce49df0e4ee613680ea5fc2ff251682c446764&profile_id=164&oauth2_token_id=57447761" className='video' autoplay progress controls></video>
        </div>
    )
}
