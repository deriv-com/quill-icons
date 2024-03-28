import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedExclamationMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={2}
    height={24}
    viewBox='0 0 2 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2 6v8c0 .563-.469 1-1 1-.562 0-1-.437-1-1V6c0-.531.438-1 1-1 .531 0 1 .469 1 1M1 19c-.469 0-.875-.219-1.094-.625a1.27 1.27 0 0 1 0-1.25A1.26 1.26 0 0 1 1 16.5c.438 0 .844.25 1.063.625.218.406.218.875 0 1.25A1.19 1.19 0 0 1 1 19' />
    </g>
    <defs>
      <clipPath id='6acc3301037eeb1b7fbc6634b117ee7a__a'>
        <path d='M0 0h2v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExclamationMdFillIcon);
export default ForwardRef;
