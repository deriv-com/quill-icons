import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUsersXlRegularIcon = (
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
      <path d='M4.5 9.75c0 .844.422 1.547 1.125 1.969.656.422 1.547.422 2.25 0C8.531 11.297 9 10.594 9 9.75c0-.797-.469-1.5-1.125-1.922-.703-.422-1.594-.422-2.25 0C4.922 8.25 4.5 8.953 4.5 9.75m6 0c0 1.36-.75 2.578-1.875 3.281-1.172.656-2.625.656-3.75 0C3.703 12.328 3 11.11 3 9.75c0-1.312.703-2.531 1.875-3.234 1.125-.657 2.578-.657 3.75 0C9.75 7.219 10.5 8.438 10.5 9.75M15 13.5c-1.078 0-2.062.61-2.625 1.5-.516.938-.516 2.11 0 3A3.05 3.05 0 0 0 15 19.5c1.031 0 2.016-.562 2.578-1.5.516-.89.516-2.062 0-3-.562-.89-1.547-1.5-2.578-1.5m0 7.5c-1.64 0-3.094-.844-3.937-2.25-.797-1.36-.797-3.094 0-4.5C11.906 12.89 13.359 12 15 12c1.594 0 3.047.89 3.89 2.25.797 1.406.797 3.14 0 4.5C18.048 20.156 16.595 21 15 21m-2.766 3c-2.53 0-4.64 2.016-4.734 4.5h14.953C22.36 26.016 20.25 24 17.72 24zm0-1.5h5.485A6.28 6.28 0 0 1 24 28.781c0 .703-.562 1.219-1.266 1.219H7.22A1.21 1.21 0 0 1 6 28.781c0-3.468 2.766-6.281 6.234-6.281M24 7.5c-.844 0-1.547.469-1.969 1.125-.422.703-.422 1.594 0 2.25C22.453 11.578 23.156 12 24 12c.797 0 1.5-.422 1.922-1.125.422-.656.422-1.547 0-2.25C25.5 7.969 24.797 7.5 24 7.5m0 6c-1.36 0-2.578-.703-3.281-1.875-.657-1.125-.657-2.578 0-3.75C21.422 6.75 22.64 6 24 6c1.313 0 2.531.75 3.234 1.875.657 1.172.657 2.625 0 3.75C26.531 12.797 25.312 13.5 24 13.5m.75 3H21c0-.516-.094-.984-.187-1.5h3.937c2.86 0 5.25 2.39 5.25 5.25 0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75 3.76 3.76 0 0 0-3.75-3.75M9 16.5H5.25a3.73 3.73 0 0 0-3.75 3.75c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75C0 17.39 2.344 15 5.25 15h3.938c-.141.516-.188.984-.188 1.5' />
    </g>
    <defs>
      <clipPath id='1c728a61b3c1746d7938db2de06a4348__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUsersXlRegularIcon);
export default ForwardRef;
