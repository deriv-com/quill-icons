import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEyeSlashMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m1.188 4.188 3.5 2.718C6.094 5.844 7.844 5 10 5c2.5 0 4.531 1.156 6 2.531 1.469 1.344 2.438 2.969 2.906 4.094.094.25.094.531 0 .781-.406 1-1.25 2.438-2.5 3.688l3.282 2.593c.343.25.406.72.125 1.032-.25.343-.72.406-1.032.125l-18.5-14.5c-.343-.25-.406-.719-.125-1.032.25-.343.719-.406 1.032-.125m4.718 3.687L7.344 9C8.062 8.375 8.969 8 10 8c2.188 0 4 1.813 4 4 0 .688-.156 1.313-.469 1.844l1.688 1.312c1.094-1.062 1.844-2.281 2.219-3.156-.407-.937-1.25-2.25-2.47-3.375C13.689 7.438 12.032 6.5 10 6.5c-1.594 0-2.937.563-4.094 1.375m6.407 5.031c.124-.281.187-.594.187-.906 0-1.375-1.125-2.5-2.5-2.5h-.062c.03.188.062.344.062.5 0 .344-.094.625-.219.906zM13.937 18A8.2 8.2 0 0 1 10 19c-2.531 0-4.562-1.125-6.031-2.5s-2.438-3-2.906-4.094a1.12 1.12 0 0 1 0-.781c.312-.719.812-1.625 1.53-2.562L3.75 10a9.8 9.8 0 0 0-1.219 2c.438.938 1.25 2.281 2.469 3.406 1.281 1.188 2.938 2.094 5 2.094.938 0 1.813-.187 2.625-.531zm-2.75-2.156A5 5 0 0 1 9.97 16c-2.188 0-4-1.781-4-4 0-.062.031-.156.031-.25l1.75 1.375a2.42 2.42 0 0 0 1.688 1.313z' />
    </g>
    <defs>
      <clipPath id='af6eb1c6c4909f8b3b0dc87bf3bdc777__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEyeSlashMdBoldIcon);
export default ForwardRef;
