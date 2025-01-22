import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEyeSlashCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m.89 3.64 2.626 2.04C4.57 4.883 5.883 4.25 7.5 4.25c1.875 0 3.398.867 4.5 1.898 1.102 1.008 1.828 2.227 2.18 3.07a.84.84 0 0 1 0 .587c-.305.75-.938 1.828-1.875 2.765l2.46 1.946c.258.187.305.539.094.773a.518.518 0 0 1-.773.094L.21 4.508a.518.518 0 0 1-.094-.774.518.518 0 0 1 .774-.093m3.54 2.766 1.078.844A3 3 0 0 1 7.5 6.5c1.64 0 3 1.36 3 3 0 .516-.117.984-.352 1.383l1.266.984c.82-.797 1.383-1.71 1.664-2.367-.305-.703-.937-1.687-1.851-2.531-.961-.89-2.204-1.594-3.727-1.594-1.195 0-2.203.422-3.07 1.031m4.804 3.774c.094-.211.141-.446.141-.68A1.88 1.88 0 0 0 7.5 7.625h-.047c.024.14.047.258.047.375 0 .258-.07.469-.164.68zm1.22 3.82a6.14 6.14 0 0 1-2.954.75c-1.898 0-3.422-.844-4.523-1.875-1.102-1.031-1.829-2.25-2.18-3.07a.84.84 0 0 1 0-.586 9.4 9.4 0 0 1 1.148-1.922L2.812 8a7.4 7.4 0 0 0-.914 1.5c.329.703.938 1.71 1.852 2.555.96.89 2.203 1.57 3.75 1.57.703 0 1.36-.14 1.969-.398zM8.39 12.383a3.8 3.8 0 0 1-.914.117c-1.641 0-3-1.336-3-3 0-.047.023-.117.023-.187l1.313 1.03c.234.493.703.868 1.265.985z' />
    </g>
    <defs>
      <clipPath id='625505139281d0028ea92907ccc183cb__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEyeSlashCaptionBoldIcon);
export default ForwardRef;
