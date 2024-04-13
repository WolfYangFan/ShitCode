import random
def choice() -> tuple:
    config_fishes = [{"name":"小鱼","frequency":2,"weight":100,"price":2},{"name":"尚方宝剑","frequency":2,"weight":100,"price":1},{"name":"小杂鱼~♡","frequency":3,"weight":95,"price":20},{"name":"烤激光鱼","frequency":10,"weight":90,"price":50},{"name":"社恐鱼","frequency":2,"weight":90,"price":50},{"name":"大专学历的鱼","frequency":3,"weight":86,"price":50},{"name":"抑郁鱼","frequency":3,"weight":82,"price":40},{"name":"林北的四文鱼","frequency":3,"weight":80,"price":75},{"name":"上过大学的鱼","frequency":3,"weight":70,"price":80},{"name":"丁真鱼","frequency":3,"weight":60,"price":80},{"name":"林北卖的鱼","frequency":5,"weight":50,"price":150},{"name":"Code鱼","frequency":4,"weight":50,"price":155},{"name":"心海","frequency":3,"weight":30,"price":400}]
    config_fishes.append(
        {"name": "河", "frequency": 3, "weight": 2, "price": 2000})
    weights = [weight["weight"] for weight in config_fishes]
    choices = random.choices(
        config_fishes,
        weights=weights,
    )
    return choices[0]["name"], choices[0]["frequency"]
    
for i in range(1000):
    print(choice())
