import { FC, useCallback } from "react"
import cls from "./NotFoundPage.module.scss"
import { useNavigate } from "react-router-dom"
import { Button, Card, Typography } from "antd"

interface NotFoundPageProps {
  className?: string
}

export const NotFoundPage: FC<NotFoundPageProps> = () => {
  const navigate = useNavigate()
  const goToMainPage = useCallback(() => {
    navigate("/")
  }, [navigate])
  return (
    <Card className={cls.NotFoundPage}>
      <Typography.Text className={cls.text}>
        Страница не найдена
      </Typography.Text>
      <Button className={cls.button} onClick={goToMainPage}>
        Перейти на главную
      </Button>
    </Card>
  )
}
