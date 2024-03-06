import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLightbulbXlFillIcon = (
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
      <path d='M12.75 24h-7.5a13.6 13.6 0 0 0-2.297-4.031v-.047q-.375-.468-.75-.985Q.797 16.923.75 14.25q.094-3.516 2.438-5.812Q5.483 6.092 9 6q3.515.094 5.813 2.438 2.343 2.295 2.437 5.812-.047 2.672-1.453 4.688l-.75 1.03v.048A13.8 13.8 0 0 0 12.75 24M9 30q-1.593-.046-2.672-1.078-1.031-1.079-1.078-2.672v-.75h7.5v.75q-.046 1.594-1.078 2.672Q10.593 29.953 9 30M5.25 14.25q.046-1.593 1.078-2.672Q7.407 10.547 9 10.5q.703-.047.75-.75Q9.703 9.047 9 9q-2.25.047-3.703 1.547Q3.797 12 3.75 14.25q.046.703.75.75.704-.047.75-.75' />
    </g>
    <defs>
      <clipPath id='1d4bce9005b87ba8abd98d765d905f32__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLightbulbXlFillIcon);
export default ForwardRef;
