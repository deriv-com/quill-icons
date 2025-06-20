import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMoonCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.375 5.82a4.14 4.14 0 0 0-2.25 3.68 4.096 4.096 0 0 0 4.102 4.125c.304 0 .609-.023.914-.094A5.25 5.25 0 0 1 2.6 8.562c0-1.007.282-1.945.774-2.742m1.453-1.547h.844c.164.024.305.141.328.305a.335.335 0 0 1-.164.399 2 2 0 0 0-.234.14l-.282.211c-.047.024-.07.047-.093.07a4.11 4.11 0 0 0-1.5 3.188c0 2.273 1.851 4.102 4.101 4.125h.094c.14-.024.258-.024.375-.024.07-.023.164-.023.258-.046.164-.024.328.046.398.187.07.164.047.328-.07.445-.07.07-.117.118-.188.165-.117.093-.21.187-.328.28-.047.024-.094.071-.14.095a5.24 5.24 0 0 1-3 .937C2.344 14.75 0 12.406 0 9.5a5.24 5.24 0 0 1 4.828-5.227' />
    </g>
    <defs>
      <clipPath id='ba04a4009cefcaee151c67c2c0403aad__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMoonCaptionBoldIcon);
export default ForwardRef;
