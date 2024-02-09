import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedImagePolaroidUserXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M15.75 24H1.5v1.5q0 .657.422 1.078Q2.343 27 3 27h15q.657 0 1.078-.422.422-.421.422-1.078V24zm-.094-1.5H19.5v-12q0-.656-.422-1.078Q18.657 9 18 9H3q-.656 0-1.078.422Q1.5 9.843 1.5 10.5v12h3.844q.282-1.313 1.265-2.156.986-.798 2.391-.844h3q1.406.047 2.39.844.986.843 1.266 2.156m-8.765 0h7.218Q13.547 21.094 12 21H9q-1.546.094-2.11 1.5M21 10.5v15q-.047 1.266-.89 2.11-.844.843-2.11.89H3q-1.266-.047-2.11-.89-.843-.844-.89-2.11v-15q.047-1.266.89-2.11.844-.843 2.11-.89h15q1.266.047 2.11.89.843.844.89 2.11M12 15q0-.656-.422-1.078-.421-.422-1.078-.422-.656 0-1.078.422Q9 14.343 9 15t.422 1.078q.421.422 1.078.422t1.078-.422Q12 15.657 12 15m-1.5-3q1.687.047 2.578 1.5.845 1.5 0 3-.89 1.454-2.578 1.5-1.687-.046-2.578-1.5-.844-1.5 0-3 .89-1.453 2.578-1.5' />
    </g>
    <defs>
      <clipPath id='96b3188b7df0607d4e3f7793ddaf1c1e__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedImagePolaroidUserXlRegularIcon);
export default ForwardRef;
