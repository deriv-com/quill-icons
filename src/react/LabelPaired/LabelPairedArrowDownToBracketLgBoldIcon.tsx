import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownToBracketLgBoldIcon = (
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
      <path d='m14.664 13.977-5 5c-.39.39-.976.39-1.328 0l-5-5a.856.856 0 0 1 0-1.29.856.856 0 0 1 1.289 0l3.398 3.399V6.438a.95.95 0 0 1 .938-.938c.547 0 .937.43.937.938v9.648l3.399-3.398c.39-.391.976-.391 1.328 0 .39.351.39.937 0 1.289zm-12.539 4.96v3.125c0 .899.664 1.563 1.563 1.563h10.625c.859 0 1.562-.664 1.562-1.562v-3.125c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938v3.125a3.443 3.443 0 0 1-3.437 3.437H3.688A3.42 3.42 0 0 1 .25 22.063v-3.125c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938' />
    </g>
    <defs>
      <clipPath id='6c96440da3467399b6e7d2138a4a4053__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToBracketLgBoldIcon);
export default ForwardRef;
