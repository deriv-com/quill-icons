import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEllipsisSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.188 10.75q-.029.738-.657 1.148a1.4 1.4 0 0 1-1.312 0q-.63-.41-.656-1.148.027-.738.656-1.148a1.4 1.4 0 0 1 1.312 0q.63.41.656 1.148m-4.376 0q-.026.738-.656 1.148a1.4 1.4 0 0 1-1.312 0q-.63-.41-.657-1.148.028-.738.657-1.148a1.4 1.4 0 0 1 1.312 0q.63.41.657 1.148m-5.687 1.313q-.738-.029-1.148-.657a1.4 1.4 0 0 1 0-1.312q.41-.63 1.148-.656.738.027 1.148.656.33.656 0 1.312-.41.63-1.148.656' />
    </g>
    <defs>
      <clipPath id='8b809d4c6b4581e18590291ade8bde7b__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEllipsisSmBoldIcon);
export default ForwardRef;
