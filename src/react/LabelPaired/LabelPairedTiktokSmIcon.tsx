import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTiktokSmIcon = (
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
      <path d='M12.625 9.492c-1.23.028-2.379-.355-3.363-1.066v4.894c0 1.86-1.149 3.5-2.899 4.157a4.41 4.41 0 0 1-4.894-1.23 4.48 4.48 0 0 1-.574-5.06c.875-1.613 2.68-2.515 4.539-2.269v2.46a2.06 2.06 0 0 0-2.297.74c-.492.737-.492 1.694.027 2.405a2.04 2.04 0 0 0 2.27.739 2.05 2.05 0 0 0 1.421-1.942V3.75h2.407c0 .219 0 .41.054.629a3.23 3.23 0 0 0 1.477 2.187 3.3 3.3 0 0 0 1.832.547z' />
    </g>
    <defs>
      <clipPath id='7cd00e76a86d92e4889e954fd50b8e2f__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTiktokSmIcon);
export default ForwardRef;
