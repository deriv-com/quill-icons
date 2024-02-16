import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPasteXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.5 7.5q-.89.047-1.078.89-.188.564-.75.61H5.25q-.703.047-.75.75v.75h6v-.75q-.047-.703-.75-.75h-.422q-.563-.046-.703-.61-.234-.843-1.125-.89M3 9q-.656 0-1.078.422Q1.5 9.843 1.5 10.5V24q0 .657.422 1.078.421.422 1.078.422h6V27H3q-1.266-.047-2.11-.89Q.048 25.265 0 24V10.5q.047-1.266.89-2.11.844-.843 2.11-.89h2.11Q5.86 6.095 7.5 6q1.64.095 2.39 1.5H12q1.266.047 2.11.89.843.844.89 2.11h-1.5q0-.656-.422-1.078Q12.657 9 12 9h-.14q.14.375.14.75v.75q0 .657-.422 1.078Q11.157 12 10.5 12h-6q-.656 0-1.078-.422Q3 11.157 3 10.5v-.75q0-.375.14-.75zm10.5 19.5H21q.657 0 1.078-.422.422-.421.422-1.078v-9h-2.625q-.797 0-1.312-.562Q18 16.922 18 16.125V13.5h-4.5q-.656 0-1.078.422Q12 14.343 12 15v12q0 .657.422 1.078.421.422 1.078.422m6-14.766v2.391q.046.329.375.375h2.39zM21 30h-7.5q-1.266-.047-2.11-.89-.843-.844-.89-2.11V15q.047-1.266.89-2.11.844-.843 2.11-.89h5.438a2.17 2.17 0 0 1 1.593.656l2.813 2.813q.656.656.656 1.594V27q-.047 1.266-.89 2.11-.844.843-2.11.89' />
    </g>
    <defs>
      <clipPath id='f13f1951ede8f45985096dc0f8ec6459__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPasteXlRegularIcon);
export default ForwardRef;
