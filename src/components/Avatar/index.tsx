

export const Avatar = ({ image }: { image: string }) => {
  return (
    <img className="size-[40px] rounded-full" src={image}>
    </img>
  )
}

export const BorderAvatar = ({ image }: { image: string }) => {
  return (
    <div className="border-2 border-custom-border p-[2px] rounded-full">
      <img className="size-[36px] rounded-full" src={image}>
      </img>
    </div>
  )
}
