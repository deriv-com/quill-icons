import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFlagCheckeredCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1 3.875v1.031l2.297-.633a4.03 4.03 0 0 1 2.86.282A3.29 3.29 0 0 0 9.25 4.46l.375-.211a.754.754 0 0 1 1.125.656v6.61a.74.74 0 0 1-.469.68l-.703.304a4.34 4.34 0 0 1-3.656-.094 3.57 3.57 0 0 0-2.555-.258L1 12.805v2.32c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375V3.875c0-.187.164-.375.375-.375.188 0 .375.188.375.375M1 5.68v1.453l2.25-.492V5.047zm0 2.226V9.57l2.25-.492V7.414zm3-.656v1.664a3.7 3.7 0 0 1 1.594.07L7 9.406V7.742c-.047 0-.094-.023-.117-.023l-1.524-.446a2.7 2.7 0 0 0-1.289-.046zm3.75.633V9.57c.352.024.703 0 1.055-.093L10 9.219V7.555l-1.031.234c-.399.094-.82.117-1.219.094M7 10.18c-.047 0-.094-.024-.117-.024l-1.524-.445a2.7 2.7 0 0 0-1.289-.047L4 9.688v1.593c.773-.07 1.547.094 2.273.446.235.117.47.21.727.28zm.75 1.922a3.45 3.45 0 0 0 1.523-.282l.727-.304V9.992l-1.031.235c-.399.093-.82.117-1.219.093zm0-4.993v.024c.352.023.703 0 1.055-.094L10 6.781V4.906l-.375.211c-.586.328-1.242.516-1.875.516zM7 5.586c-.422-.047-.797-.188-1.172-.375A3.33 3.33 0 0 0 4 4.906v1.57a3.6 3.6 0 0 1 1.57.07L7 6.97zm-6 4.758v1.687l2.18-.61c.023 0 .047 0 .07-.023V9.852z' />
    </g>
    <defs>
      <clipPath id='6919c310fba93e73a9d8fefd11f71398__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFlagCheckeredCaptionRegularIcon);
export default ForwardRef;
