import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGridLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 8.313c0-.86.664-1.563 1.563-1.563h1.875c.859 0 1.562.703 1.562 1.563v1.874c0 .899-.703 1.563-1.562 1.563H1.812c-.898 0-1.562-.664-1.562-1.562zm0 6.25C.25 13.703.914 13 1.813 13h1.875c.859 0 1.562.703 1.562 1.563v1.874c0 .899-.703 1.563-1.562 1.563H1.812C.915 18 .25 17.336.25 16.438zm5 6.25v1.875c0 .898-.703 1.562-1.562 1.562H1.812c-.898 0-1.562-.664-1.562-1.562v-1.875c0-.86.664-1.563 1.563-1.563h1.875c.859 0 1.562.703 1.562 1.563m1.25-12.5c0-.86.664-1.563 1.563-1.563h1.874c.86 0 1.563.703 1.563 1.563v1.874c0 .899-.703 1.563-1.562 1.563H8.062c-.898 0-1.562-.664-1.562-1.562zm5 6.25v1.874c0 .899-.703 1.563-1.562 1.563H8.062c-.898 0-1.562-.664-1.562-1.562v-1.875c0-.86.664-1.563 1.563-1.563h1.874c.86 0 1.563.703 1.563 1.563m-5 6.25c0-.86.664-1.563 1.563-1.563h1.874c.86 0 1.563.703 1.563 1.563v1.875c0 .898-.703 1.562-1.562 1.562H8.062c-.898 0-1.562-.664-1.562-1.562zm11.25-12.5v1.874c0 .899-.703 1.563-1.562 1.563h-1.875c-.899 0-1.563-.664-1.563-1.562V8.312c0-.859.664-1.562 1.563-1.562h1.874c.86 0 1.563.703 1.563 1.563m-5 6.25c0-.86.664-1.563 1.563-1.563h1.874c.86 0 1.563.703 1.563 1.563v1.874c0 .899-.703 1.563-1.562 1.563h-1.875c-.899 0-1.563-.664-1.563-1.562zm5 6.25v1.875c0 .898-.703 1.562-1.562 1.562h-1.875c-.899 0-1.563-.664-1.563-1.562v-1.875c0-.86.664-1.563 1.563-1.563h1.874c.86 0 1.563.703 1.563 1.563' />
    </g>
    <defs>
      <clipPath id='583d20c11ffe7ad83e7397fb46b662ae__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGridLgFillIcon);
export default ForwardRef;
