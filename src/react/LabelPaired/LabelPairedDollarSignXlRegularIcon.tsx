import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDollarSignXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.25 6.75v2.297c1.453.14 2.906.422 3.89.703.422.094.657.469.563.89s-.469.657-.89.563c-1.547-.375-3.844-.844-5.813-.656-.984.094-1.875.328-2.484.703-.61.422-1.032.984-1.22 1.922-.14.656-.046 1.172.142 1.547.187.422.515.75 1.03 1.078 1.032.656 2.532 1.031 4.22 1.5h.046c1.594.422 3.329.89 4.594 1.687.656.422 1.219.938 1.547 1.641q.563 1.125.281 2.531c-.328 1.594-1.453 2.672-2.953 3.282-.844.328-1.875.515-2.953.562v2.25a.74.74 0 0 1-.75.75.74.74 0 0 1-.75-.75v-2.297c-.281-.047-.61-.047-.89-.094-1.22-.187-3.094-.609-4.688-1.312-.375-.14-.516-.61-.375-.985.187-.375.61-.562.984-.375 1.407.61 3.14.985 4.266 1.172 1.828.282 3.422.141 4.594-.328s1.828-1.172 2.015-2.156c.14-.703.047-1.172-.14-1.594-.188-.375-.516-.75-1.032-1.031-1.03-.656-2.53-1.078-4.171-1.5l-.094-.047c-1.594-.375-3.328-.844-4.547-1.64-.656-.422-1.219-.985-1.594-1.688Q.586 14.32.797 12.844c.281-1.313.937-2.203 1.875-2.86.937-.562 2.062-.843 3.187-.937C6.141 9 6.422 9 6.75 9V6.75c0-.375.328-.75.75-.75.375 0 .75.375.75.75' />
    </g>
    <defs>
      <clipPath id='2d0e2a408d0afd0a1522e0c807d53264__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDollarSignXlRegularIcon);
export default ForwardRef;
