import { Button } from '../';

const Center = ({ title }) => {

  return (
    <div>
      <p className="text-4xl xl:text-5xl font-bold tracking-widest leading-none">{title}</p>
      <p className="py-6 tracking-wide">From: <span><b>Aarya Pack</b></span></p>
      <a href="mailto:aaryapack1@gmail.com" target="_blank">
        <Button
        title="Get Quotes Now!"
      />
      </a>
    </div>
  )
}

export default Center