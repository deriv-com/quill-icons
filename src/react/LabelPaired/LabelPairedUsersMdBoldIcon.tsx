import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUsersMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.5 9a2.53 2.53 0 0 1-2.187-1.25c-.438-.75-.438-1.719 0-2.5C2.78 4.5 3.593 4 4.5 4c.875 0 1.688.5 2.156 1.25.438.781.438 1.75 0 2.5C6.188 8.531 5.375 9 4.5 9M16 9a2.53 2.53 0 0 1-2.187-1.25c-.438-.75-.438-1.719 0-2.5C14.28 4.5 15.093 4 16 4c.875 0 1.688.5 2.156 1.25.438.781.438 1.75 0 2.5C17.688 8.531 16.875 9 16 9M0 13.344C0 11.5 1.469 10 3.313 10h1.343c.5 0 .969.125 1.407.313C6 10.53 6 10.78 6 11c0 1.219.5 2.281 1.344 3H.656A.64.64 0 0 1 0 13.344M12.656 14h-.031A3.9 3.9 0 0 0 14 11a5 5 0 0 0-.062-.687A3.3 3.3 0 0 1 15.312 10h1.344C18.5 10 20 11.5 20 13.344c0 .375-.312.656-.687.656zM10 9.5c-.562 0-1.031.313-1.312.75-.282.469-.282 1.063 0 1.5.28.469.75.75 1.312.75.531 0 1-.281 1.281-.75.281-.437.281-1.031 0-1.5C11 9.813 10.531 9.5 10 9.5m0 4.5a3.03 3.03 0 0 1-2.625-1.5c-.531-.906-.531-2.062 0-3C7.938 8.594 8.906 8 10 8c1.063 0 2.031.594 2.594 1.5.531.938.531 2.094 0 3-.563.938-1.531 1.5-2.594 1.5m-1.844 2.5c-1.25 0-2.281.875-2.594 2h8.844c-.312-1.125-1.344-2-2.594-2zm0-1.5h3.656A4.19 4.19 0 0 1 16 19.188c0 .468-.375.812-.844.812H4.813A.807.807 0 0 1 4 19.188C4 16.875 5.844 15 8.156 15' />
    </g>
    <defs>
      <clipPath id='b89c23c940cc14dd24658807c00d04bd__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUsersMdBoldIcon);
export default ForwardRef;
