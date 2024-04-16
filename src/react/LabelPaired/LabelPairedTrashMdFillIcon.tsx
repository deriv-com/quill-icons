import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTrashMdFillIcon = (
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
      <path d='M4.219 4.563A.96.96 0 0 1 5.094 4h3.781c.375 0 .719.219.875.563L10 5h3c.531 0 1 .469 1 1 0 .563-.469 1-1 1H1c-.562 0-1-.437-1-1 0-.531.438-1 1-1h3zM13 8l-.687 10.594c-.032.812-.688 1.406-1.5 1.406H3.156c-.812 0-1.469-.594-1.5-1.406L1 8z' />
    </g>
    <defs>
      <clipPath id='4fc829ed2f4ca50658c338d0f9c5bff2__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTrashMdFillIcon);
export default ForwardRef;
