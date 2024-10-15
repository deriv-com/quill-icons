import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightIdentityCardKycIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 64 64'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#fff'
      d='M57.235 11H6.765A3.765 3.765 0 0 0 3 14.765v34.47A3.765 3.765 0 0 0 6.765 53h50.47A3.765 3.765 0 0 0 61 49.235v-34.47A3.765 3.765 0 0 0 57.235 11'
    />
    <path
      fill='#F2F2F2'
      fillRule='evenodd'
      d='M57 25.51v20.98A2.51 2.51 0 0 1 54.49 49H38.51A2.51 2.51 0 0 1 36 46.49V25.51A2.51 2.51 0 0 1 38.51 23h15.98A2.51 2.51 0 0 1 57 25.51'
      clipRule='evenodd'
    />
    <path
      fill='#84ABAE'
      fillRule='evenodd'
      d='M42.6 41.166h7.8c1.436 0 2.6 1.12 2.6 2.5v2.333H40v-2.333c0-1.38 1.164-2.5 2.6-2.5'
      clipRule='evenodd'
    />
    <path
      fill='#fff'
      fillRule='evenodd'
      d='m43.666 41.168.667 2.667 1.666-1.334-.333-1.333zM49.667 41.168l-.666 2.667-1.667-1.334.333-1.333z'
      clipRule='evenodd'
    />
    <path
      fill='#C7E5E5'
      d='M51 35.5a4.33 4.33 0 0 1-2.479 3.917l.146 1.749-1.765 1.764a.333.333 0 0 1-.471 0l-1.764-1.764.145-1.75a4.33 4.33 0 0 1-2.479-3.917v-.666h-.666a.667.667 0 0 1-.667-.667v-1c0-.368.298-.667.667-.667h.666v-1a4.333 4.333 0 0 1 8.667 0v1h.667c.368 0 .666.299.666.667v1a.667.667 0 0 1-.666.667H51z'
    />
    <path
      fill='#84ABAE'
      fillRule='evenodd'
      d='M50.167 28.167q1.833 2 .834 5V34a.167.167 0 1 1-.334 0v-1.193c-.489-.516-.709-.725-1.333-1.973q-1.736 1-3.833 1-.667 0-2.167-.334-.375.902-.667 1.16V34a.167.167 0 1 1-.333 0v-1.27q-.14-.087-.25-.396c-.417-1.167-.25-3.667 1.25-4.834s5-1.333 6.833.667'
      clipRule='evenodd'
    />
    <path
      fill='#E3E4E3'
      d='M28.915 36H8.085C7.485 36 7 36.486 7 37.085v.83c0 .6.486 1.085 1.085 1.085h20.83c.6 0 1.085-.486 1.085-1.085v-.83c0-.6-.486-1.085-1.085-1.085M28.915 42H8.085C7.485 42 7 42.486 7 43.085v.83c0 .6.486 1.085 1.085 1.085h20.83c.6 0 1.085-.486 1.085-1.085v-.83c0-.6-.486-1.085-1.085-1.085'
    />
    <path
      fill='#84ABAE'
      fillRule='evenodd'
      d='M12.25 26.5h-3.5c-.965 0-1.75.764-1.75 1.702v3.096C7 32.236 7.785 33 8.75 33h3.5c.965 0 1.75-.764 1.75-1.702v-3.096c0-.938-.785-1.702-1.75-1.702m.796 3.714h-.955v-.773c0-.086.071-.155.159-.155h.796zm0-2.012v.155h-.796c-.614 0-1.114.486-1.114 1.084v2.63H9.864V27.43h2.386c.439 0 .796.347.796.773m-5.091 1.084h.954v.928h-.954zm.795-1.857h.16v.928h-.955v-.155c0-.426.356-.773.795-.773m-.795 3.869v-.155h.954v.928H8.75a.786.786 0 0 1-.795-.773m4.295.773h-.16v-.928h.956v.155a.786.786 0 0 1-.796.773M6.5 11h51a3.5 3.5 0 0 1 3.5 3.5V19H3v-4.5A3.5 3.5 0 0 1 6.5 11'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(DerivLightIdentityCardKycIcon);
export default ForwardRef;
