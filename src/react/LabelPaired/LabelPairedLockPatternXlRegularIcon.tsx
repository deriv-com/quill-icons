import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLockPatternXlRegularIcon = (
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
      <path d='M3.75 9A2.25 2.25 0 0 1 6 6.75c.938 0 1.781.656 2.11 1.5h4.734c.328-.844 1.172-1.5 2.156-1.5.938 0 1.781.656 2.11 1.5h4.734c.328-.844 1.172-1.5 2.156-1.5 1.219 0 2.25 1.031 2.25 2.25A2.25 2.25 0 0 1 24 11.25c-.375 0-.703-.047-.984-.187l-6 6c.14.28.234.609.234.937A2.25 2.25 0 0 1 15 20.25c-.375 0-.703-.047-.984-.187l-6 6c.046.046.046.14.093.187h4.735c.328-.844 1.172-1.5 2.156-1.5.938 0 1.781.656 2.11 1.5h4.734c.328-.844 1.172-1.5 2.156-1.5 1.219 0 2.25 1.031 2.25 2.25A2.25 2.25 0 0 1 24 29.25c-.984 0-1.828-.61-2.156-1.5h-4.735c-.328.89-1.172 1.5-2.109 1.5-.984 0-1.828-.61-2.156-1.5H8.109a2.29 2.29 0 0 1-2.156 1.5A2.25 2.25 0 0 1 3.703 27c0-1.219 1.031-2.25 2.25-2.25.375 0 .703.094.984.234l6-6a2.2 2.2 0 0 1-.234-.984c0-1.219 1.031-2.25 2.25-2.25.375 0 .703.094.985.234l6-6c-.047-.046-.047-.14-.094-.234h-4.735c-.328.89-1.172 1.5-2.109 1.5-.984 0-1.828-.61-2.156-1.5H8.109c-.328.89-1.171 1.5-2.109 1.5A2.22 2.22 0 0 1 3.75 9m0 9c0 .844.422 1.547 1.125 1.969.656.422 1.547.422 2.25 0C7.781 19.547 8.25 18.844 8.25 18c0-.797-.469-1.5-1.125-1.922-.703-.422-1.594-.422-2.25 0C4.172 16.5 3.75 17.203 3.75 18m18 0c0 .844.422 1.547 1.125 1.969.656.422 1.547.422 2.25 0 .656-.422 1.125-1.125 1.125-1.969 0-.797-.469-1.5-1.125-1.922-.703-.422-1.594-.422-2.25 0-.703.422-1.125 1.125-1.125 1.922' />
    </g>
    <defs>
      <clipPath id='180c4296aabbdb6818c4f700add0a333__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLockPatternXlRegularIcon);
export default ForwardRef;
