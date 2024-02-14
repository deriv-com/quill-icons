import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDollarSignXlBoldIcon = (
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
      <path d='M8.625 7.125v2.297q1.97.234 3.375.61.984.327.797 1.359-.328.984-1.313.843-1.125-.28-2.578-.515a13.7 13.7 0 0 0-2.765-.094q-1.36.094-2.157.61-.702.421-.937 1.406-.141.796.094 1.172.187.375.797.796 1.406.75 3.843 1.313h.094q1.125.28 2.25.656a8.6 8.6 0 0 1 2.11.89q1.03.61 1.64 1.735.563 1.126.281 2.578-.609 2.485-3 3.282a7.5 7.5 0 0 1-2.531.515v2.297Q8.532 29.907 7.5 30q-1.03-.093-1.125-1.125v-2.344h-.234a.5.5 0 0 0-.235-.047q-.938-.14-2.203-.468a15 15 0 0 1-2.297-.75q-.89-.47-.562-1.453.516-.938 1.5-.61.797.375 1.922.656t1.968.422q2.531.328 4.079-.281 1.452-.61 1.64-1.64.141-.797-.094-1.172-.187-.375-.796-.797-1.408-.75-3.844-1.313h-.094q-1.125-.28-2.25-.656a8.6 8.6 0 0 1-2.11-.89q-1.03-.61-1.64-1.735-.563-1.125-.281-2.578.421-1.969 1.969-2.906a6.9 6.9 0 0 1 3.14-.938h.422v-2.25Q6.47 6.095 7.5 6q1.032.095 1.125 1.125' />
    </g>
    <defs>
      <clipPath id='5ea70c51678985ade7b03351def04ddc__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDollarSignXlBoldIcon);
export default ForwardRef;
