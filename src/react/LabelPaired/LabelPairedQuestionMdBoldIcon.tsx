import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedQuestionMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2 9a.74.74 0 0 1-.75.75A.72.72 0 0 1 .5 9c0-2.187 1.781-4 3.969-3.969h1c2.218 0 4 1.782 4 4v.125a3.77 3.77 0 0 1-1.656 3.125l-1.625 1.094a.98.98 0 0 0-.438.813v.062A.74.74 0 0 1 5 15a.72.72 0 0 1-.75-.75v-.062c0-.813.406-1.594 1.094-2.063l1.625-1.094A2.2 2.2 0 0 0 8 9.156V9c0-1.375-1.125-2.5-2.5-2.5h-1A2.487 2.487 0 0 0 2 9m3 10c-.562 0-1-.437-1-1 0-.531.438-1 1-1 .531 0 1 .469 1 1 0 .563-.469 1-1 1' />
    </g>
    <defs>
      <clipPath id='b3d566ad3d011f6ab3a28db7e420e66e__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedQuestionMdBoldIcon);
export default ForwardRef;
