import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleEnvelopeMdFillIcon = (
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
      <path d='M8 20c-2.875 0-5.5-1.5-6.937-4-1.438-2.469-1.438-5.5 0-8A8.02 8.02 0 0 1 8 4c2.844 0 5.469 1.531 6.906 4 1.438 2.5 1.438 5.531 0 8A7.94 7.94 0 0 1 8 20M4 10v.313L7.719 12c.093.031.187.063.281.063A.6.6 0 0 0 8.25 12L12 10.313V10c0-.531-.469-1-1-1H5c-.562 0-1 .469-1 1m4.656 2.906a1.6 1.6 0 0 1-.656.156c-.25 0-.469-.062-.687-.156L4 11.406V14c0 .563.438 1 1 1h6c.531 0 1-.437 1-1v-2.594z' />
    </g>
    <defs>
      <clipPath id='19d0061281e093d7e97752b7b62ea569__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEnvelopeMdFillIcon);
export default ForwardRef;
