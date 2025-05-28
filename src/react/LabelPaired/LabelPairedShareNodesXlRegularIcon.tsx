import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedShareNodesXlRegularIcon = (
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
      <path d='M21 11.25c0 2.11-1.687 3.75-3.75 3.75-1.078 0-2.062-.422-2.766-1.172l-7.078 3.563c.047.187.094.422.094.609 0 .234-.047.469-.094.656l7.078 3.516C15.188 21.469 16.172 21 17.25 21A3.76 3.76 0 0 1 21 24.75c0 2.11-1.687 3.75-3.75 3.75-2.11 0-3.75-1.64-3.75-3.75 0-.422.047-.89.188-1.266L6.89 20.062c-.703 1.032-1.828 1.688-3.141 1.688C1.64 21.75 0 20.11 0 18c0-2.062 1.64-3.75 3.75-3.75 1.313 0 2.438.703 3.14 1.734l6.798-3.421c-.141-.422-.188-.844-.188-1.313 0-2.062 1.64-3.75 3.75-3.75A3.76 3.76 0 0 1 21 11.25m-17.25 9c.797 0 1.5-.422 1.922-1.125.422-.656.422-1.547 0-2.25-.422-.656-1.125-1.125-1.922-1.125-.844 0-1.547.469-1.969 1.125-.422.703-.422 1.594 0 2.25.422.703 1.125 1.125 1.969 1.125m15.75-9c0-.797-.469-1.5-1.125-1.922-.703-.422-1.594-.422-2.25 0C15.422 9.75 15 10.453 15 11.25c0 .844.422 1.547 1.125 1.969.656.422 1.547.422 2.25 0 .656-.422 1.125-1.125 1.125-1.969M17.25 27c.797 0 1.5-.422 1.922-1.125.422-.656.422-1.547 0-2.25-.422-.656-1.125-1.125-1.922-1.125-.844 0-1.547.469-1.969 1.125-.422.703-.422 1.594 0 2.25.422.703 1.125 1.125 1.969 1.125' />
    </g>
    <defs>
      <clipPath id='ac5220d51ae24df27bdb2e81cf3d850f__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedShareNodesXlRegularIcon);
export default ForwardRef;
