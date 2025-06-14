import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDealCancellationXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.219 11.719h4.453c.797 0 1.5.14 2.156.422.656.234 1.219.656 1.688 1.172s.797 1.171 1.078 1.968c.234.797.375 1.688.375 2.719 0 1.078-.14 1.969-.375 2.766-.281.797-.61 1.453-1.078 1.968-.47.516-1.032.891-1.688 1.172a5.4 5.4 0 0 1-2.156.422H4.219zM8.672 22.5c.937 0 1.687-.281 2.25-.89.562-.563.844-1.454.844-2.579v-2.015c0-1.125-.282-2.016-.844-2.578-.563-.61-1.313-.891-2.25-.891H6.234V22.5zm12.516 2.016c-1.641 0-2.907-.563-3.844-1.641-.938-1.125-1.407-2.719-1.407-4.875 0-1.031.094-1.969.376-2.766.234-.796.562-1.5 1.03-2.015.47-.563.985-.985 1.641-1.266.657-.281 1.407-.422 2.203-.422 1.125 0 2.016.235 2.766.703.75.47 1.313 1.22 1.735 2.157l-1.735.937a2.9 2.9 0 0 0-.984-1.453c-.469-.328-1.032-.516-1.782-.516-.937 0-1.734.329-2.25.985-.562.656-.843 1.547-.843 2.719v1.921c0 1.172.281 2.063.843 2.72.516.655 1.313.983 2.25.983.75 0 1.407-.187 1.875-.562.47-.375.797-.89 1.032-1.5l1.64.984c-.422.891-.984 1.641-1.734 2.157-.797.515-1.687.75-2.812.75' />
    </g>
    <defs>
      <clipPath id='220db79775574c31e9f402af7b8974f9__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDealCancellationXlRegularIcon);
export default ForwardRef;
