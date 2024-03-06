import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBullhornXlRegularIcon = (
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
      <path d='M19.5 8.063q0-.235-.234-.329-.235-.093-.422.094L17.719 9q-3 3.141-7.219 4.125v8.297q4.22.937 7.219 4.078l1.125 1.172q.187.187.422.094.234-.094.234-.328zM9 21.14v-7.782a7 7 0 0 1-.797.047l-1.406.094H3q-.656 0-1.078.422Q1.5 14.343 1.5 15v4.5q0 .657.422 1.078Q2.343 21 3 21h3.797l1.36.094q.42 0 .843.047m8.766-14.344q.984-.89 2.062-.469Q20.907 6.75 21 8.062v18.376q-.093 1.313-1.172 1.734t-2.062-.469l-1.125-1.172Q13.5 23.251 9 22.641v4.734q-.047 1.125-.75 1.875-.75.704-1.875.75h-.75q-1.125-.046-1.875-.75-.703-.75-.75-1.875V22.5q-1.266-.047-2.11-.89-.843-.844-.89-2.11V15q.047-1.266.89-2.11.844-.843 2.11-.89h3.75l1.36-.094a13.1 13.1 0 0 0 4.64-1.125 12.8 12.8 0 0 0 3.89-2.812zM4.5 22.5v4.875q.095 1.032 1.125 1.125h.75q1.032-.093 1.125-1.125v-4.828l-.75-.047zM23.25 15q.704.047.75.75v3q-.046.704-.75.75-.704-.046-.75-.75v-3q.046-.703.75-.75' />
    </g>
    <defs>
      <clipPath id='fb684880ef94cc527c2e8a61c22b6e9b__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBullhornXlRegularIcon);
export default ForwardRef;
