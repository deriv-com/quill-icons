import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleXmarkMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8 5a6.98 6.98 0 0 0-6.062 3.5c-1.282 2.188-1.282 4.844 0 7C3.188 17.688 5.467 19 8 19c2.5 0 4.781-1.312 6.031-3.5 1.281-2.156 1.281-4.812 0-7C12.781 6.344 10.5 5 8 5m0 15c-2.875 0-5.5-1.5-6.937-4-1.438-2.469-1.438-5.5 0-8A8.02 8.02 0 0 1 8 4c2.844 0 5.469 1.531 6.906 4 1.438 2.5 1.438 5.531 0 8A7.94 7.94 0 0 1 8 20M5.625 9.656a.53.53 0 0 1 .719 0L8 11.312l1.625-1.656a.53.53 0 0 1 .719 0 .53.53 0 0 1 0 .719L8.688 12l1.656 1.656a.53.53 0 0 1 0 .719.53.53 0 0 1-.719 0L8 12.719l-1.656 1.656a.53.53 0 0 1-.719 0 .53.53 0 0 1 0-.719L7.281 12l-1.656-1.625a.53.53 0 0 1 0-.719' />
    </g>
    <defs>
      <clipPath id='419c37a47bde32d5e4eec6661c994661__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleXmarkMdRegularIcon);
export default ForwardRef;
