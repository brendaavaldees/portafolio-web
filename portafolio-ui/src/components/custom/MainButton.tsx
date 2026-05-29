type MainButtonProps = {
  label: string;
};

export default function MainButton({ label }: MainButtonProps) {
  return (
    <button className="flex-1 px-4 py-2 ml-20 whitespace-nowrap w-fit bg-[url(/assets/bgs/tricolor-square-vr-bg.jpg)] text-lg text-title rounded-3xl font-title font-extrabold text-shadow-md hover:underline decoration-wavy border-2 border-dashed">
      {label}
    </button>
  );
}
