import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedAndroidXlIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M19.688 20.156a1.11 1.11 0 0 0 1.125-1.125 1.14 1.14 0 0 0-1.125-1.125 1.14 1.14 0 0 0-1.125 1.125 1.11 1.11 0 0 0 1.125 1.125m-12.422 0a1.11 1.11 0 0 0 1.125-1.125 1.14 1.14 0 0 0-1.125-1.125 1.14 1.14 0 0 0-1.125 1.125 1.11 1.11 0 0 0 1.125 1.125m12.843-6.75c3.844 2.11 6.47 6 6.891 10.594H0c.375-4.594 3-8.484 6.844-10.594l-2.25-3.89a.43.43 0 0 1 0-.47q.14-.28.422-.28c.187 0 .328.14.422.28l2.25 3.938a14.23 14.23 0 0 1 11.578 0l2.25-3.937c.093-.14.234-.281.422-.281q.281 0 .421.28a.43.43 0 0 1 0 .47z' />
    </g>
    <defs>
      <clipPath id='30b14c25177738b9c1948fcf85dc2bd0__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAndroidXlIcon);
export default ForwardRef;
