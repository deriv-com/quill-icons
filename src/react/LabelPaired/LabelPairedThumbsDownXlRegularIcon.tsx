import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThumbsDownXlRegularIcon = (
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
      <path d='M13.547 26.156q.375.985 1.36.797.984-.375.796-1.36l-.187-.796a12 12 0 0 0-1.172-2.672q-.234-.375-.047-.75.234-.375.656-.375H21q.657 0 1.078-.422.422-.421.422-1.078-.047-.843-.703-1.266-.516-.42-.235-.984.188-.329.188-.75-.047-.937-.797-1.36a.7.7 0 0 1-.422-.468.94.94 0 0 1 .14-.656q.33-.375.329-.891-.047-1.078-1.031-1.453-.562-.235-.516-.844.047-.14.047-.328 0-.656-.422-1.078Q18.657 9 18 9h-4.172q-1.171 0-2.11.61l-1.78 1.218a3.55 3.55 0 0 0-1.079 1.078q-.421.515-1.03.188-.517-.422-.235-1.031a5.7 5.7 0 0 1 1.5-1.5l1.781-1.172q1.36-.891 2.906-.891H18q1.266.047 2.11.89.843.844.89 2.11v.047q1.407.843 1.5 2.578 0 .61-.234 1.172.938.843.984 2.203 0 .47-.14.89.843.844.89 2.11-.047 1.266-.89 2.11-.844.843-2.11.89h-4.781q.468.938.75 1.922l.187.75q.282 1.078-.234 2.015-.562.89-1.594 1.22-1.078.28-2.015-.235-.89-.516-1.22-1.594l-.234-.797q-.655-2.344-2.718-3.703L9 21.984l.375-.562-.375.562a4.2 4.2 0 0 1-1.36-1.312q-.375-.61.188-1.031.563-.33 1.031.187.375.563.938.89l.14.095q2.579 1.687 3.376 4.593zM1.5 22.5h3V12h-3zm-1.5 0V12q0-.656.422-1.078Q.843 10.5 1.5 10.5h3q.657 0 1.078.422Q6 11.343 6 12v10.5q0 .657-.422 1.078Q5.157 24 4.5 24h-3q-.656 0-1.078-.422Q0 23.157 0 22.5' />
    </g>
    <defs>
      <clipPath id='ab1fb24c2a89f4aa9052bf919945705d__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThumbsDownXlRegularIcon);
export default ForwardRef;
