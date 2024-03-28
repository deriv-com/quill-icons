import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedAppStoreIosSmIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M11.313 4.625c.71 0 1.312.602 1.312 1.313v9.625c0 .738-.602 1.312-1.312 1.312H1.688a1.296 1.296 0 0 1-1.313-1.312V5.938c0-.711.574-1.313 1.313-1.313zm-7.465 9.652.52-.902c-.274-.355-.657-.465-1.095-.328l-.382.683c-.164.247-.055.602.191.739a.545.545 0 0 0 .766-.192m3.773-1.476c.246-.438-.055-1.094-.601-1.094H5.324l2.324-4.074c.165-.246.082-.574-.191-.738-.246-.137-.602-.055-.738.19l-.246.438-.246-.437c-.137-.246-.493-.328-.739-.191a.55.55 0 0 0-.218.738l.574.984-1.778 3.09H2.672c-.3 0-.547.246-.547.547 0 .3.246.547.547.547zm2.707 0c.3 0 .547-.246.547-.547 0-.3-.246-.547-.547-.547H8.906c-.738-1.23-1.258-2.16-1.613-2.789-.328.273-.656 1.066-.191 1.86.437.765 1.12 1.94 2.023 3.5a.53.53 0 0 0 .738.19.53.53 0 0 0 .192-.738l-.52-.93z' />
    </g>
    <defs>
      <clipPath id='84b1f8bcf64006abeba9fc2404a67d63__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAppStoreIosSmIcon);
export default ForwardRef;
