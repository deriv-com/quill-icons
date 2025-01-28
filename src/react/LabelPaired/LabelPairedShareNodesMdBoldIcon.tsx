import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedShareNodesMdBoldIcon = (
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
      <path d='M14 8a3 3 0 0 1-3 3 2.96 2.96 0 0 1-2.281-1.031l-2.813 1.406c.063.219.094.438.094.625q0 .329-.094.656l2.813 1.375A3.07 3.07 0 0 1 11 13a3 3 0 1 1-3 3c0-.187 0-.406.063-.625L5.25 13.969A2.95 2.95 0 0 1 3 15a3 3 0 0 1 0-6c.875 0 1.688.406 2.25 1.031l2.813-1.375C8 8.437 8 8.22 8 8a3 3 0 0 1 6 0M3 13.5c.531 0 1-.281 1.281-.75.282-.437.282-1.031 0-1.5C4 10.813 3.531 10.5 3 10.5c-.562 0-1.031.313-1.312.75-.282.469-.282 1.063 0 1.5.28.469.75.75 1.312.75M12.5 8c0-.531-.312-1-.75-1.281-.469-.282-1.062-.282-1.5 0C9.781 7 9.5 7.469 9.5 8c0 .563.281 1.031.75 1.313.438.28 1.031.28 1.5 0 .438-.282.75-.75.75-1.313M11 17.5c.531 0 1-.281 1.281-.75.281-.437.281-1.031 0-1.5-.281-.437-.75-.75-1.281-.75-.562 0-1.031.313-1.312.75-.282.469-.282 1.063 0 1.5.28.469.75.75 1.312.75' />
    </g>
    <defs>
      <clipPath id='cd56a271820a175b7632d078bac6fed2__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedShareNodesMdBoldIcon);
export default ForwardRef;
