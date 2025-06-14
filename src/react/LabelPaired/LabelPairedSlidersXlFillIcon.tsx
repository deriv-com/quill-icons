import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSlidersXlFillIcon = (
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
      <path d='M0 25.5c0-.797.656-1.5 1.5-1.5h2.531c.61-1.312 1.922-2.25 3.469-2.25 1.5 0 2.86.938 3.422 2.25H22.5c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5H10.922C10.359 28.36 9 29.25 7.5 29.25c-1.547 0-2.86-.89-3.469-2.25H1.5A1.48 1.48 0 0 1 0 25.5m6 0c0 .844.656 1.5 1.5 1.5.797 0 1.5-.656 1.5-1.5 0-.797-.703-1.5-1.5-1.5-.844 0-1.5.703-1.5 1.5m9-7.5c0 .844.656 1.5 1.5 1.5.797 0 1.5-.656 1.5-1.5 0-.797-.703-1.5-1.5-1.5-.844 0-1.5.703-1.5 1.5m1.5-3.75c1.5 0 2.86.938 3.422 2.25H22.5c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5h-2.578c-.563 1.36-1.922 2.25-3.422 2.25-1.547 0-2.86-.89-3.469-2.25H1.5A1.48 1.48 0 0 1 0 18c0-.797.656-1.5 1.5-1.5h11.531c.61-1.312 1.922-2.25 3.469-2.25M9 12c.797 0 1.5-.656 1.5-1.5C10.5 9.703 9.797 9 9 9c-.844 0-1.5.703-1.5 1.5 0 .844.656 1.5 1.5 1.5m3.422-3H22.5c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5H12.422C11.859 13.36 10.5 14.25 9 14.25c-1.547 0-2.86-.89-3.469-2.25H1.5A1.48 1.48 0 0 1 0 10.5C0 9.703.656 9 1.5 9h4.031C6.141 7.688 7.453 6.75 9 6.75c1.5 0 2.86.938 3.422 2.25' />
    </g>
    <defs>
      <clipPath id='4b25625666447d830522549b7e5e0a21__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSlidersXlFillIcon);
export default ForwardRef;
