import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightIcCloudUploadIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 49 32'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g
      fill='#EC3F3F'
      fillRule='evenodd'
      clipPath='url(#6d1d53ff446e1288c277452bd6febd38__a)'
      clipRule='evenodd'
    >
      <path d='M31.789 23.697a.776.776 0 1 0 1.096-1.1L24.8 14.484h-.002l-.546-.55-.547.55h-.001L15.62 22.6a.78.78 0 0 0 .548 1.327.77.77 0 0 0 .547-.228l6.764-6.79V30.6a.775.775 0 0 0 1.322.549.78.78 0 0 0 .226-.549V16.908z' />
      <path d='M39.448 9.482C37.542 4.1 32.51.515 26.78.515c-5.4 0-10.257 3.261-12.358 8.204-.99-.46-2.065-.7-3.158-.7-4.165 0-7.555 3.4-7.563 7.578a8.82 8.82 0 0 0-3.448 6.995c0 4.844 3.936 8.784 8.902 8.786l.162.001q.08 0 .136-.003h8.159a.776.776 0 0 0 .548-1.326.78.78 0 0 0-.548-.228h-8.2c-.075.005-.155.002-.23 0h-.158c-3.982 0-7.222-3.244-7.222-7.23a7.26 7.26 0 0 1 3.13-5.973l.356-.356-.04-.65c0-3.329 2.7-6.038 6.016-6.038a6 6 0 0 1 3.156.906l.82.51.318-.914c1.669-4.79 6.177-8.005 11.223-8.005 5.208 0 9.766 3.346 11.34 8.33l.144.455.47.076c4.614.75 7.965 4.697 7.965 9.39 0 5.24-4.256 9.5-9.486 9.5H30.89a.776.776 0 0 0-.774.778c0 .428.347.777.774.777h6.324c6.084 0 11.034-4.96 11.034-11.057-.002-5.3-3.675-9.785-8.801-10.839' />
    </g>
    <defs>
      <clipPath id='6d1d53ff446e1288c277452bd6febd38__a'>
        <path fill='#fff' d='M0 0h49v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(DerivLightIcCloudUploadIcon);
export default ForwardRef;
