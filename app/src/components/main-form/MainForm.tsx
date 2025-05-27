
export function MainForm() {
  return (

            <form className='form' action="">
              <div className='formControl'>
    
                <InputDefault
                  id='input'
                  type='text'
                  labelText='LabelText'
                  placeholder='Digite algo'
                />
              </div>
    
              <div className='formControl'>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
    
              <div className='formControl'>
                <Cycle />
              </div>
    
              <div className='formControl'>
                <DefaultButton color='green' icon={<PlayCircleIcon />} />
              </div>
    
              <div className='formControl'>
                <Footer />
              </div>
    
            </form>
            
  )
}