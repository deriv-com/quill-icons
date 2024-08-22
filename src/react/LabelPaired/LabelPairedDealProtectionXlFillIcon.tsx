import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDealProtectionXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M15.563 11.063h6.703c.656 0 1.312.093 1.875.328a4.4 4.4 0 0 1 1.453.984c.375.469.703.984.937 1.547a6.3 6.3 0 0 1 .282 1.875c0 .703-.094 1.312-.282 1.922a5.4 5.4 0 0 1-.937 1.5 4.4 4.4 0 0 1-1.453.984 5 5 0 0 1-1.875.375H19.78v4.547h-4.218zm6.796 3.984c-.047-.047-.14-.14-.422-.14h-2.156v1.78h2.157c.28 0 .375-.046.421-.093.047-.047.141-.14.141-.375v-.797c0-.281-.094-.328-.094-.375zM8.484 11.062c.891 0 1.782.141 2.532.422.797.329 1.5.75 2.062 1.36q.845.915 1.266 2.25c.281.89.422 1.875.422 3q0 1.617-.422 2.953-.421 1.335-1.266 2.25a5.1 5.1 0 0 1-2.062 1.36 7.2 7.2 0 0 1-2.532.468H3V11.063zm1.407 9.657c.28-.282.468-.75.468-1.688V17.11c0-.937-.187-1.406-.468-1.687s-.703-.469-1.407-.469H7.266v6.235h1.218c.704 0 1.125-.188 1.407-.47' />
    </g>
    <defs>
      <clipPath id='5c94c955913d5a571966ce0977f997db__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDealProtectionXlFillIcon);
export default ForwardRef;
