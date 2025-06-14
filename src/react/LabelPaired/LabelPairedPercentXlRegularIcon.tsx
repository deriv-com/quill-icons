import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPercentXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 10.5c-.844 0-1.5.703-1.5 1.5 0 .844.656 1.5 1.5 1.5.797 0 1.5-.656 1.5-1.5 0-.797-.703-1.5-1.5-1.5M3 15a3.05 3.05 0 0 1-2.625-1.5c-.516-.89-.516-2.062 0-3C.938 9.61 1.922 9 3 9c1.031 0 2.016.61 2.578 1.5.516.938.516 2.11 0 3C5.016 14.438 4.031 15 3 15m12 7.5c-.844 0-1.5.703-1.5 1.5 0 .844.656 1.5 1.5 1.5.797 0 1.5-.656 1.5-1.5 0-.797-.703-1.5-1.5-1.5m0 4.5a3.05 3.05 0 0 1-2.625-1.5c-.516-.89-.516-2.062 0-3 .563-.89 1.547-1.5 2.625-1.5 1.031 0 2.016.61 2.578 1.5.516.938.516 2.11 0 3-.562.938-1.547 1.5-2.578 1.5m2.766-16.687-16.5 16.5c-.282.28-.797.28-1.078 0-.282-.282-.282-.797 0-1.079l16.5-16.5c.28-.28.796-.28 1.078 0 .28.282.28.797 0 1.079' />
    </g>
    <defs>
      <clipPath id='94f43af877b231775e1652c9b3df8229__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPercentXlRegularIcon);
export default ForwardRef;
