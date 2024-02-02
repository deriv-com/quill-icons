import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedStopLossSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.21 14.55c-.628 0-1.147-.109-1.585-.327a3.2 3.2 0 0 1-1.094-.903l.82-.765c.247.3.547.547.848.71q.451.247 1.067.247.697 0 1.066-.328c.246-.22.356-.493.356-.848 0-.274-.083-.52-.247-.684s-.464-.3-.902-.382l-.656-.11c-.711-.137-1.23-.355-1.586-.71-.383-.329-.547-.794-.547-1.368 0-.328.055-.629.164-.875.137-.273.3-.492.52-.656.218-.192.492-.328.82-.438.3-.082.656-.136 1.066-.136.547 0 1.012.082 1.422.3.41.164.766.465 1.04.82l-.821.739a2.4 2.4 0 0 0-.684-.602 2.34 2.34 0 0 0-1.039-.218c-.41 0-.738.082-.957.246-.246.164-.355.41-.355.738s.11.547.273.71q.287.206.903.33l.656.136c.71.136 1.258.383 1.586.71.355.329.52.794.52 1.395 0 .328-.055.656-.165.93-.136.273-.3.52-.547.71-.218.22-.492.356-.82.466s-.71.164-1.121.164m4.075-.136V7.086h1.176v6.289h2.98v1.04z' />
    </g>
    <defs>
      <clipPath id='1c77a482122ec983__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStopLossSmRegularIcon);
export default ForwardRef;
