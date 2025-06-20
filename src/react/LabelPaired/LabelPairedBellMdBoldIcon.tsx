import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7 4c.531 0 1 .469 1 1v.625c2.281.438 4 2.469 4 4.875v.813c0 1.406.469 2.78 1.344 3.906l.469.562c.187.25.218.563.093.813a.73.73 0 0 1-.656.406H.75a.74.74 0 0 1-.687-.406.78.78 0 0 1 .093-.813l.469-.562C1.5 14.094 2 12.719 2 11.313V10.5c0-2.406 1.719-4.437 4-4.875V5c0-.531.438-1 1-1m0 3c-1.937 0-3.5 1.594-3.5 3.5v.813c0 1.5-.437 2.937-1.25 4.187h9.469c-.813-1.25-1.219-2.687-1.219-4.187V10.5C10.5 8.594 8.906 7 7 7m2 11c0 .531-.219 1.063-.594 1.438A1.96 1.96 0 0 1 7 20c-.531 0-1.062-.187-1.437-.562S5 18.53 5 18h4' />
    </g>
    <defs>
      <clipPath id='39a68bfb085e0af13489f48c85d47742__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellMdBoldIcon);
export default ForwardRef;
