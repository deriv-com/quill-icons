import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRectangleBarcodeXlRegularIcon = (
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
      <path d='M3 9q-.656 0-1.078.422Q1.5 9.843 1.5 10.5v15q0 .657.422 1.078Q2.343 27 3 27h21q.657 0 1.078-.422.422-.421.422-1.078v-15q0-.656-.422-1.078Q24.657 9 24 9zm-3 1.5q.047-1.266.89-2.11.844-.843 2.11-.89h21q1.266.047 2.11.89.843.844.89 2.11v15q-.047 1.266-.89 2.11-.844.843-2.11.89H3q-1.266-.047-2.11-.89-.843-.844-.89-2.11zm4.5 2.25q.046-.703.75-.75.704.047.75.75v10.5q-.046.704-.75.75-.703-.046-.75-.75zm13.5 0q.046-.703.75-.75.704.047.75.75v10.5q-.046.704-.75.75-.704-.046-.75-.75zm3.75-.75q.704.047.75.75v10.5q-.046.704-.75.75-.704-.046-.75-.75v-10.5q.046-.703.75-.75m-14.25.75q.046-.703.75-.75.703.047.75.75v10.5q-.047.704-.75.75-.703-.046-.75-.75zm3.75-.75q.703.047.75.75v10.5q-.047.704-.75.75-.703-.046-.75-.75v-10.5q.047-.703.75-.75m3 .75q.047-.703.75-.75.703.047.75.75v10.5q-.047.704-.75.75-.703-.046-.75-.75z' />
    </g>
    <defs>
      <clipPath id='5ff7f13d87cf404cb58ba605e79d7118__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRectangleBarcodeXlRegularIcon);
export default ForwardRef;
