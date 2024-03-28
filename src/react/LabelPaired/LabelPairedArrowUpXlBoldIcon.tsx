import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m9.797 7.875 7.875 8.25c.422.469.422 1.172-.047 1.594s-1.172.422-1.594-.047l-5.906-6.235v15.938A1.11 1.11 0 0 1 9 28.5c-.656 0-1.125-.469-1.125-1.125V11.438l-5.953 6.234c-.422.469-1.125.469-1.594.047a1.12 1.12 0 0 1-.047-1.594l7.875-8.25c.235-.234.516-.375.844-.375.281 0 .563.14.797.375' />
    </g>
    <defs>
      <clipPath id='50e02d18638ff5b0cbd9ec3fec30b347__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpXlBoldIcon);
export default ForwardRef;
