import { AspectRatio as AspectRatioPrimitive } from "radix-ui"

function AspectRatio({
  ...props
}) {
  return <AspectRatioPrimitive.Root data-slot="aspect-ratio" {...props} />;
}

export { AspectRatio }

{/* <AspectRatio ratio={16 / 9}>
  <img src={togatrans} alt="Image" className="rounded-md object-cover" />
</AspectRatio> */}