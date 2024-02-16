import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBarcodeXlRegularIcon = (
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
      <path d='M0 8.25q.047-.703.75-.75.704.046.75.75v19.5q-.046.704-.75.75-.703-.046-.75-.75zm3 0q.046-.703.75-.75.704.046.75.75v19.5q-.046.704-.75.75-.703-.046-.75-.75zm3.75-.75q.704.046.75.75v19.5q-.046.704-.75.75-.703-.046-.75-.75V8.25q.046-.703.75-.75m3.75.75q.047-.703.75-.75.703.046.75.75v19.5q-.047.704-.75.75-.703-.046-.75-.75zm3.75-.75q.703.046.75.75v19.5q-.047.704-.75.75-.703-.046-.75-.75V8.25q.047-.703.75-.75m3.75.75q.046-.703.75-.75.704.046.75.75v19.5q-.046.704-.75.75-.704-.046-.75-.75zm5.25-.75q.704.046.75.75v19.5q-.046.704-.75.75-.704-.046-.75-.75V8.25q.046-.703.75-.75' />
    </g>
    <defs>
      <clipPath id='a2d8fb2dbf00c0408c0f1248eb01fa45__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarcodeXlRegularIcon);
export default ForwardRef;
